import useForums from "../../hooks/useForums";


const Forum = () => {
    const [forums] = useForums();
    console.log(forums);
    return (
        <div>
            
        </div>
    );
};

export default Forum;