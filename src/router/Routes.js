import { ForYou, Following, Upload, Profiles, ViewPage } from '../components/Container/pages';
import { UploadLayout, ProfilesLayout, VideoViewLayout } from '../layouts';
import config from '../config';
const PublicRoute = [
    { path: config.routes.home, element: ForYou },
    { path: config.routes.following, element: Following },
    { path: config.routes.upload, element: Upload, layout: UploadLayout },
    { path: config.routes.profiles, element: Profiles, layout: ProfilesLayout },
    { path: config.routes.live, element: Upload },
    { path: config.routes.video, element: ViewPage, layout: VideoViewLayout },
];
export { PublicRoute };
