import "./List.css"
const List = ({ data, setSelected, setSelectedData }) => {
    const clickHanlder = (id) => {
        setSelected(id);
        const dt = (data.filter((dt) => dt.id === id))
        setSelectedData([...dt])
    }
    return (<>{data.map((dt) => <div key={dt.id} className="sidecontainer" onClick={() => clickHanlder(dt.id)}>
        <div className="logo" style={{ backgroundColor: dt.bgColor }} >{dt.title.split(" ").map((name) => (name[0]))}</div>
        <div className="title">{dt.title}</div>
    </div>)}</>);
}

export default List;