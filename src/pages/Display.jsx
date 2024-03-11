import UserInfo from "../components/UserInfo";
import Notes from "../components/Notes";
// import Weather from "../components/Weather"
// import News from "../components/News"
import Timer from "../components/Timer"

export default function Display(){
    return (
        <>
            <UserInfo/>
            <Notes/>
            {/* <Weather/> */}
            {/* <News/> */}
            <Timer/>
        </>
    );
}