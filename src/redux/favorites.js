import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
	favorites: [],
}
const favorites = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavourite: (state, action) => {
			const index = state.favorites.indexOf(action.payload)
			if (index !== -1) {
				state.favorites.splice(index, 1)
			} else {
				state.favorites.push(action.payload)
			}
		},
	},
})

export const { toggleFavourite } = favorites.actions


export default favorites.reducer