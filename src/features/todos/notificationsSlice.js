import {createSlice} from "@reduxjs/toolkit"

const notificationsSlice = createSlice({
	name: "notifications",
	initialState: [],
	reducers: {
		notificationAdded(state, action) {
			state.push(action.payload)
		},
		notificationDeleted(state, action) {
			return state.filter(notification => notification.id !== action.payload.id)
		}
	},
})

export const {
	notificationAdded,
	notificationDeleted
} = notificationsSlice.actions
export default notificationsSlice.reducer