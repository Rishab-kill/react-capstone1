/* eslint-disable react/prop-types */
export default function MovieBox({ data, selected, setSelected }){
    const isSelected = selected.includes(data.id);//if selected array contains data.id then isSelected is true otherwise false
    const handleClick = () => {
        if(selected.includes(data.id)){
            setSelected((prev) => prev.filter((item) => item !== data.id));
        }else{
            setSelected((prev) => {
                return [...prev,data.id];
            });
        }
    }
    return (
        <div onClick={handleClick} style={{backgroung:data.color,textAlign:"center",width:"20vw",border:isSelected?"12px solid green":""}}>
            <p>{data.id}</p>
            {data.image}
        </div>
    );
}