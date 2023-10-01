

import { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import Modal from './components/Modal';
import Content from './components/Content';



const data = [{ id: "1", title: "My Group", bgColor: "red", content: [] },
{ id: "2", title: "Javascript group", bgColor: "green", content: [] },
]


const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
let groupIndex = null;
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectId, setSelected] = useState(null);
  const [selectData, setSelectedData] = useState([])
  const [text, setText] = useState("");
  const [groupData, setGroupData] = useState(data);

  useEffect(() => {
    console.log(selectData);
  }, [selectId, selectData])

  const textHandler = (e) => {
    setText(e.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
  }


  const onAddToDataHandler = (dt) => {
    setGroupData((prevData) => [...prevData, dt])
  }
  const addContentHandler = () => {
    groupIndex = groupData.findIndex((gr) => gr.id === selectId);
    const groupElement = groupData[groupIndex];
    groupElement.content = [...groupElement.content, { title: text, date: new Date() }]
    groupData[groupIndex] = groupElement;
    console.log(groupData)
  }
  return (
    <div className='container'>
      {isOpen && <Modal setIsOpen={setIsOpen} onAddToDataHandler={onAddToDataHandler} />}
      <div className='sidebar'>
        <div className='heading'>Pocket Notes</div>
        <div className='list'>
          <List setSelected={setSelected} setSelectedData={setSelectedData} data={groupData} />
        </div>
        <div className='btnContainer'>
          <button className='btn' onClick={() => setIsOpen(true)}>+</button>
        </div>
      </div>
      <div className='main'>
        {selectId !== null && <>
          <div className='main_header'>
            <div className='main_header_round_label'>{selectData[0].title.split(" ").map((name) => (name[0]))}</div>
            <div className='main_header_round_title'>{selectData[0].title}</div>
          </div>

          <div className='main_header_container'>
            {groupData[groupIndex]?.content?.map((ct, idx) =>
              <div className='content_container' key={idx}>
                <p className='content_para'>{ct.title}</p>
                <div className='date_and_time'><span className='date'>{ct.date.getDate()} {months[ct.date.getMonth()]} {ct.date.getFullYear()}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <circle cx="4" cy="4" r="4" fill="#353535" />
                  </svg>
                  <span className='time'>{ct.date.getUTCHours()}:{ct.date.getMinutes()} {ct.date.getHours() >= 12 ? 'PM' : 'AM'}</span>
                </div>
              </div>
            )}
          </div>
          <div className='textArea'>
            <div className='input_button'>
              <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter your text here...........' />
              <div onClick={addContentHandler} style={{ cursor: "pointer", display: "flex", flexDirection: "flex-start" }}>{text === "" ? <svg xmlns="http://www.w3.org/2000/svg" width="35" height="29" viewBox="0 0 35 29" fill="none">
                <path d="M0 29V18.125L14.5 14.5L0 10.875V0L34.4375 14.5L0 29Z" fill="#ABABAB" />
              </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="35" height="29" viewBox="0 0 35 29" fill="none">
                <path d="M0 29V18.125L14.5 14.5L0 10.875V0L34.4375 14.5L0 29Z" fill="#001F8B" />
              </svg>}</div>
            </div>
          </div>
        </>}
        {selectId === null && <><div className='main1'>
          <img src='https://s3-alpha-sig.figma.com/img/f2b5/d356/00b6d4748cd536df01bd2b4fecc1d821?Expires=1696809600&Signature=MrHGcpV~X5x9cdif-x00IbSuJPzI99g~u-ssa8x~rP~LlBCZNUamW4OIOE4IJutKdXsDYXNtuMycP~oETBn2m47HLjod5S-Mzkvf6VfHqn5L0hJZtV-qLPsrJmexgn0R6rnuDDjn3aofm-LbkzMWNxNC9LJqVvcMdYzqdt36HO~T8Ysq~KsbdFO7vzkQGnUTvYtavJyA6zi703UMjqioE9vRvSF4hR~e3kMLpmA7jw2ouQ~2p2ZZ9YciJHmaiKLnCK2mT7fyJCUjewJec~eN2wyT9MvFzMIhPHHSLEsviR3K8Ct-RQS-Qzmz-v-QHyHm606n04glLZDXCBJuFepNYA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt="Images" />
          <h2 className='head'>Pocket Notes</h2>
          <p className='desc'>Send and receive messages without keeping your phone online.
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>

          <div className='bottom_desc'>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21" fill="#292929">
              <path d="M2.125 21C1.54063 21 1.04019 20.804 0.623689 20.412C0.207189 20.02 -0.000706529 19.5493 1.80391e-06 19V9C1.80391e-06 8.45 0.208252 7.979 0.624752 7.587C1.04125 7.195 1.54134 6.99933 2.125 7H3.1875V5C3.1875 3.61667 3.70565 2.43733 4.74194 1.462C5.77823 0.486667 7.03092 -0.000665984 8.5 6.8306e-07C9.96979 6.8306e-07 11.2228 0.487667 12.2591 1.463C13.2954 2.43833 13.8132 3.61733 13.8125 5V7H14.875C15.4594 7 15.9598 7.196 16.3763 7.588C16.7928 7.98 17.0007 8.45067 17 9V19C17 19.55 16.7918 20.021 16.3753 20.413C15.9588 20.805 15.4587 21.0007 14.875 21H2.125ZM8.5 16C9.08438 16 9.58482 15.804 10.0013 15.412C10.4178 15.02 10.6257 14.5493 10.625 14C10.625 13.45 10.4168 12.979 10.0003 12.587C9.58375 12.195 9.08367 11.9993 8.5 12C7.91563 12 7.41519 12.196 6.99869 12.588C6.58219 12.98 6.37429 13.4507 6.375 14C6.375 14.55 6.58325 15.021 6.99975 15.413C7.41625 15.805 7.91634 16.0007 8.5 16ZM5.3125 7H11.6875V5C11.6875 4.16667 11.3776 3.45833 10.7578 2.875C10.138 2.29167 9.38542 2 8.5 2C7.61459 2 6.86198 2.29167 6.24219 2.875C5.6224 3.45833 5.3125 4.16667 5.3125 5V7Z" fill="#292929" />
            </svg>
            <p className='desc'>end-to-end encrypted</p>
          </div>
        </div></>}
      </div>
    </div>
  );
}

export default App;
