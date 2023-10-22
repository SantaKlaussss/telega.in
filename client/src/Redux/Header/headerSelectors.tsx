import { RootState } from "../Types";

export const activeToggleSelector = (state: RootState) => state.header.toggle;

export const fetchUsersIsOnlineSelector = (state: RootState) => state.header.isOnlineUsersFetching;

export const usersOnlineSelector = (state: RootState) => state.header.onlineUsers;

export const usersOnlineErrorSelector = (state: RootState) => state.header.isOnlineUsersError
