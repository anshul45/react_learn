import React, { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //api poling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + "🚀",
        })
      );
    }, 1300);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <div className="w-full h-[470px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages?.map((c, index) => (
          <ChatMessage name={c.name} message={c.message} key={index} />
        ))}
      </div>
      <form
        className="p-2 ml-2 shadow-sm flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Anshul",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-full p-2  border border-black rounded-sm "
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-50">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
