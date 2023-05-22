import Welcome from "./Welcome/Welcome";
import Maze from "./Maze/Maze";
import Win from "./Win/Win";

const navigate = (page, args) => {
    const queryParams = new URLSearchParams(args).toString();
    window.location = `/?route=${page}&${queryParams}`;
};

const Page = () => {
    const route = new URLSearchParams(window.location.search);

    switch(route.get('route')){
        case 'win':
            return <Win />;

        case 'maze':
            const mazeSize = route.get('mazeSize');
            const mazeTime = route.get('mazeTime');
            const character = route.get('character');
            const daytime = route.get('daytime');
            return <Maze mazeSize={mazeSize} mazeTime={mazeTime} character={character} daytime={daytime} />

        default:
            return <Welcome />
    }
};

export {navigate}
export default Page