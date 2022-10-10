import { useDispatch, useSelector } from "react-redux"
import { addNewHobby, setActiveHobby } from "../actions/hobby";
import HobbyList from "../component/Home/HobbyList/HobbyList"



export function HomePage (props){
    const hobbyList = useSelector(state => state.hobby.list)
    const activeId  = useSelector(state => state.hobby.activeId)
    const dispatch = useDispatch();
    function randomdNumberId(){
        return 1000 + Math.trunc((Math.random() * 9000))
    }
    function handleAddHobby(){
        const newId = randomdNumberId();
        console.log(newId);
        const newHobby = {
            id : newId,
            title : `Hobby ${newId}`
        }
        const action = addNewHobby(newHobby);
        dispatch(action);
    }
    const handleHobbyClick = (hobby) => {   
        const action = setActiveHobby(hobby);
        dispatch(action);

    }
    return (
        <div className="home-page">
            <h1> REDUX HOOKS - Home Page</h1>
            <h2> List Hobby</h2>
            <button onClick= {handleAddHobby}>Add Hobby</button>
            <HobbyList 
            hobbyList = {hobbyList}
            activeId = {activeId}
            onHobbyClick= {handleHobbyClick}
            />
        </div>
    )
}