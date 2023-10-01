import React, { useState } from "react";
import styles from "./Modal.module.css";


const Modal = ({ setIsOpen, onAddToDataHandler }) => {
    const [gName, setGName] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const submitHandler = () => {

        if (gName !== "" && selectedColor !== "") {
            console.log({ name: gName, color: selectedColor })
            alert("Group is created Successfully")
            onAddToDataHandler({ id: new Date().getTime(), title: gName, bgColor: selectedColor, content: [] })
            setIsOpen(false);
            setGName("");
            setSelectedColor("");
            return;
        } else {
            alert("Please fill the input");
            return;
        }
    }
    const colors = ["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"]
    return (
        <>
            <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <div>
                        <p className={styles.heading}>Create New group</p>
                    </div>
                    <div>
                        <label htmlFor="groupName">Group Name</label>
                        <input placeholder="Enter group name" value={gName} type="text" name="groupName" id="groupName" onChange={(e) => setGName(e.target.value)} />
                    </div>
                    <div className={styles.list1}>
                        <p className={styles.chooseColor}>Choose colour</p>
                        <ul className={styles.list}>
                            {colors.map((dt, idx) => <li style={{ backgroundColor: dt }} key={idx} name={dt} onClick={() => setSelectedColor(dt)}></li>)}
                        </ul>
                    </div>
                    <button onClick={submitHandler}>Create</button>
                </div>
            </div>
        </>
    );
};

export default Modal;