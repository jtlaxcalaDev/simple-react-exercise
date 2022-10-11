import One from "./exercises/exercise-one/One"
import Two from "./exercises/exercise-two/Two"
import Three from './exercises/exercise-three/Three';
import Four from './exercises/exercise-four/Four';
import Five from './exercises/exercise-five/Five';
import Six from './exercises/exercise-six/Six';
import Seven from './exercises/exercise-seven/Seven';
import Eight from './exercises/exercise-eight/Eight';
import Nine from './exercises/exercise-nine/Nine';

export const allExercises = [
  {id: '1', route: '/exercise-one', name: 'Hello World!', component: <One />},
  {id: '2', route: '/exercise-two', name: 'Capturing User Clicks', component: <Two />},
  {id: '3', route: '/exercise-three', name: 'Custom Component', component: <Three />},
  {id: '4', route: '/exercise-four', name: 'State and Props', component: <Four />},
  {id: '5', route: '/exercise-five', name: 'Mapping Through A List And Rendering', component: <Five />},
  {id: '6', route: '/exercise-six', name: 'Mapping Through A List And Rendering (With A Custom Component)', component: <Six />},
  {id: '7', route: '/exercise-seven', name: 'Building A Form', component: <Seven />},
  {id: '8', route: '/exercise-eight', name: 'Rendering JSON', component: <Eight />},
  {id: '9', route: '/exercise-nine', name: 'Working with an API', component: <Nine />}
]