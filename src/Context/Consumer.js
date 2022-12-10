import { useContext } from 'react';
import { ContextProfile } from './Context';
function Consumer() {
    return useContext(ContextProfile);
}
export default Consumer;
