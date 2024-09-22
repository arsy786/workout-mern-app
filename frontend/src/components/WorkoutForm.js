import React, { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = ({ editableWorkout, setEditableWorkout }) => {
	const { dispatch } = useWorkoutsContext();
	const { user } = useAuthContext();

	const [title, setTitle] = useState("");
	const [load, setLoad] = useState("");
	const [reps, setReps] = useState("");
	const [error, setError] = useState(null);
	const [emptyFields, setEmptyFields] = useState([]);

	useEffect(() => {
		if (editableWorkout) {
			setTitle(editableWorkout.title);
			setLoad(editableWorkout.load);
			setReps(editableWorkout.reps);
		}
	}, [editableWorkout]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!user) {
			setError("You must be logged in");
			return;
		}

		const workout = { title, load, reps };

		const fetchOptions = {
			method: editableWorkout ? "PATCH" : "POST",
			body: JSON.stringify(workout),
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user.token}`,
			},
		};

		const url = editableWorkout
			? `/api/workouts/${editableWorkout._id}`
			: "/api/workouts";

		const response = await fetch(url, fetchOptions);
		const json = await response.json();

		if (!response.ok) {
			setError(json.error);
			setEmptyFields(json.emptyFields || []);
			return;
		}

		setTitle("");
		setLoad("");
		setReps("");
		setError(null);
		setEmptyFields([]);

		const actionType = editableWorkout ? "UPDATE_WORKOUT" : "CREATE_WORKOUT";
		dispatch({ type: actionType, payload: json });

		if (editableWorkout) {
			setEditableWorkout(null);
		}
	};

	return (
		<form className="create" onSubmit={handleSubmit}>
			<h3>{editableWorkout ? "Edit Workout" : "Add a New Workout"}</h3>

			<label>Exercise Title:</label>
			<input
				type="text"
				onChange={(e) => setTitle(e.target.value)}
				value={title}
				className={emptyFields.includes("title") ? "error" : ""}
			/>

			<label>Load (in kg):</label>
			<input
				type="number"
				onChange={(e) => setLoad(e.target.value)}
				value={load}
				className={emptyFields.includes("load") ? "error" : ""}
			/>

			<label>Reps:</label>
			<input
				type="number"
				onChange={(e) => setReps(e.target.value)}
				value={reps}
				className={emptyFields.includes("reps") ? "error" : ""}
			/>

			<button>{editableWorkout ? "Update Workout" : "Add Workout"}</button>
			{error && <div className="error">{error}</div>}
		</form>
	);
};

export default WorkoutForm;
