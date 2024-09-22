import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useAuthContext } from "../hooks/useAuthContext";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutDetails = ({ workout, setEditableWorkout }) => {
	const { dispatch } = useWorkoutsContext();
	const { user } = useAuthContext();

	const handleDelete = async () => {
		if (!user) {
			return;
		}

		const response = await fetch("/api/workouts/" + workout._id, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		});
		const json = await response.json();

		if (response.ok) {
			dispatch({ type: "DELETE_WORKOUT", payload: json });
		}
	};

	return (
		<div className="workout-details" key={workout._id}>
			<h4>{workout.title}</h4>
			<p>
				<strong>Load (kg): </strong>
				{workout.load}
			</p>
			<p>
				<strong>Reps: </strong>
				{workout.reps}
			</p>
			<p>
				{formatDistanceToNow(new Date(workout.updatedAt), { addSuffix: true })}
			</p>
			<span
				className="material-symbols-outlined edit-icon"
				onClick={() => setEditableWorkout(workout)}
			>
				edit
			</span>
			<span
				className="material-symbols-outlined delete-icon"
				onClick={handleDelete}
			>
				delete
			</span>
		</div>
	);
};

export default WorkoutDetails;
