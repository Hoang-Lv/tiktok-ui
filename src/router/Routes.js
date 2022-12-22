import { ForYou, Following, Upload, Profiles, ViewPage, Feedback } from '../components/Container/pages';
import { UploadLayout, ProfilesLayout, VideoViewLayout, FeedbackLayout } from '../layouts';
import config from '../config';
const PublicRoute = [
    { path: config.routes.home, element: ForYou },
    { path: config.routes.following, element: Following },
    { path: config.routes.upload, element: Upload, layout: UploadLayout },
    { path: config.routes.profiles, element: Profiles, layout: ProfilesLayout },
    { path: config.routes.live, element: Upload },
    { path: config.routes.video, element: ViewPage, layout: VideoViewLayout },
    { path: config.routes.feedback, element: Feedback, layout: FeedbackLayout },
];
export { PublicRoute };
