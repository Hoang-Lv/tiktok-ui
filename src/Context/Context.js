import { createContext, useState } from 'react';
export const ContextProfile = createContext();
function Context({ children }) {
    const [logInState, setLogInState] = useState(true);
    const [logOutState, setLogOutState] = useState(false);
    // const [isMe, setIsMe] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [loginPopper, setLoginPopper] = useState(false);
    const [token, setToken] = useState('');
    const [authMe, setAuthMe] = useState({});
    const [nickName, setNickName] = useState('');
    const [direction, setDirection] = useState(undefined);
    const [profileVideos, setProfileVideos] = useState({});
    const [forYouVideos, setForYouVideos] = useState({});
    const [followingVideos, setFollowingVideos] = useState({});
    const [uuid, setUuid] = useState('');
    const [darkmode, setDarkMode] = useState(false);
    const [showKeyboadShort, setShowKeyboadShort] = useState(false);
    const data = {
        logInState: [logInState, setLogInState],
        logOutState: [logOutState, setLogOutState],
        isLogin: [isLogin, setIsLogin],
        token: [token, setToken],
        auth: [authMe, setAuthMe],
        loginPopper: [loginPopper, setLoginPopper],
        nickName: [nickName, setNickName],
        profileVideos: [profileVideos, setProfileVideos],
        forYouVideos: [forYouVideos, setForYouVideos],
        followingVideos: [followingVideos, setFollowingVideos],
        direction: [direction, setDirection],
        uuid: [uuid, setUuid],
        darkmode: [darkmode, setDarkMode],
        showKeyboadShort: [showKeyboadShort, setShowKeyboadShort],
    };
    return <ContextProfile.Provider value={data}>{children}</ContextProfile.Provider>;
}
export default Context;
