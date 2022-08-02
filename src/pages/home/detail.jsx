import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

// atom
import { currentUserInfoQuery, friendsInfoQuery, currentUserIDState } from '@recoil/user';
import { ErrorBound } from '@components';

function CurrentUserInfo() {
    const currentUser = useRecoilValue(currentUserInfoQuery);
    const friends = useRecoilValue(friendsInfoQuery);
    const setCurrentUserID = useSetRecoilState(currentUserIDState);

    return (
        <div>
            <h1>{currentUser.name}</h1>
            <ul>
                {friends.map((friend, index) =>
                    <li key={index} onClick={() => setCurrentUserID(friend.id)}>
                        {friend.name}
                    </li>
                )}
            </ul>
        </div>
    );
}

export default function Detail() {
    return (
        <ErrorBound>
            <React.Suspense fallback={<div>加载中……</div>}>
                <CurrentUserInfo />
            </React.Suspense>
        </ErrorBound>
    );
}