export const activeToggleSelector = (state: any) => state.header.toggle;

export const fetchUsersIsOnlineSelector = (state: any) => state.header.isOnlineUsersFetching;

export const usersOnlineSelector = (state: any) => state.header.onlineUsers;

export const usersOnlineErrorSelector = (state: any) => state.header.isOnlineUsersError
