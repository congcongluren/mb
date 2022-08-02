import { atom, selector, selectorFamily, waitForAll, waitForNone } from 'recoil';
import { getUserDetail, myDBQuery } from '@api'

export const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: 'cclr', // default value (aka initial value)
});

export const userDetailState = selector({
    key: 'userDetailState',
    get: async ({ get }) => {
        let name = get(textState);
        let res = await getUserDetail(name);
        return res;
    }
});

export const userDetailParamsQueryState = selectorFamily({
    key: 'userListState',
    get: (params) => async () => {
        let res = await getUserDetail();
        return {
            ...res,
            id: params
        }
    }
})


// 用户数据流案例： 主用户 -》 朋友列表
export const currentUserIDState = atom({
    key: 'CurrentUserID',
    default: null,
});

export const userInfoQuery = selectorFamily({
    key: 'UserInfoQuery',
    get: userID => async () => {
        const response = await myDBQuery({ userID });
        if (response.error) {
            throw response.error;
        }
        return response;
    },
});

export const currentUserInfoQuery = selector({
    key: 'CurrentUserInfoQuery',
    get: ({ get }) => get(userInfoQuery(get(currentUserIDState))),
});

export const friendsInfoQuery = selector({
    key: 'FriendsInfoQuery',
    get: ({ get }) => {
        const { friendList } = get(currentUserInfoQuery);
        const friendLoadables = get(waitForNone(
            friendList.map(friendID => userInfoQuery(friendID))
        ));
        return friendLoadables
            .filter(({ state }) => state === 'hasValue')
            .map(({ contents }) => contents);
    },
});