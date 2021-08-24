import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import ScrollableFeed from "react-scrollable-feed";
import { Recorder } from "react-voice-recorder";
import "react-voice-recorder/dist/index.css";
import {
  listUserChat,
  listFullUserChat,
} from "../../../../redux/chat/chat.action";
import { setCurrent } from "../../../../redux/common/commonAction";
import {
  sendMessage,
  filterChatList,
} from "../../../../redux/chat/chat.action";
import { Image } from "../../../../assets/images";

const Chat = () => {
  // let chat = 7;

  // const chatArray = Array.from(new Array(Math.floor(chat)));
  const [message, setMessage] = useState("");
  const [audioDetails, setAudioDetails] = useState({
    url: null,
    blob: null,
    chunks: null,
    duration: {
      h: null,
      m: null,
      s: null,
    },
  });
  const { userChats, chats, filtered } = useSelector((state) => state.chat);

  const { current } = useSelector((state) => state.common);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listUserChat());
  }, [dispatch]);

  const onSend = () => {
    dispatch(sendMessage({ message, user: current.userId, setMessage }));
  };

  const onGetChat = (chat) => {
    dispatch(setCurrent(chat));
    dispatch(listFullUserChat(chat.id));
  };

  console.log(audioDetails);

  const handleAudioStop = (data) => {
    console.log(data);
    setAudioDetails({ audioDetails: data });
  };
  const handleAudioUpload = (file) => {
    console.log(file);
  };
  const handleRest = () => {
    setAudioDetails({
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: null,
        m: null,
        s: null,
      },
    });
  };

  const handleOnChange = (value) => {
    console.log(value);
  };

  return (
    <>
      <div className="d-flex flex-column">
        <div className="container">
          <div className="d-flex">
            <div className="col-lg-6">
              <h1 className="font-weight-bold pl-3">Chat</h1>
              <div className="card card-custom shadow mb-7">
                <div className="input-icon input-icon-right">
                  <input
                    type="text"
                    onChange={(e) => dispatch(filterChatList(e.target.value))}
                    className="form-control font-family"
                    placeholder="Search a name"
                  />
                  <span>
                    <i className="flaticon2-search-1 icon-md"></i>
                  </span>
                </div>
              </div>
              <div
                className="hideScroll"
                style={{
                  height: "75.5vh",
                  overflowX: "hidden",
                  paddingLeft: ".5rem",
                  paddingRight: ".5rem",

                  scrollbarWidth: "none",
                }}
              >
                {filtered !== null ? (
                  filtered.length > 0 ? (
                    filtered.map((chat) => (
                      <div
                        key={chat.id}
                        className="card card-custom p-5 mb-5 cursor-pointer"
                        onClick={() => onGetChat(chat)}
                      >
                        {/* <p className="fs-12 text-right">03 Mar</p> */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center">
                            <img
                              src={chat.pix}
                              alt="user"
                              className="chat-img border-radius"
                            />
                            <div className="pl-3">
                              <h3 className="fs-16 font-weight-500 line-height-2">
                                {chat.name}
                              </h3>
                              <small
                                className="fs-14"
                                style={{ color: "grey" }}
                              >
                                {chat.lastMessage}
                              </small>
                            </div>
                          </div>
                          {/* <span className="menu-label">
                      <span className="label label-sm text-white font-weight-700 bg-eventplux">
                        4
                      </span>
                    </span> */}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="d-flex justify-content-center align-items-center w-100">
                      <p>No user to show!</p>
                    </div>
                  )
                ) : (
                  userChats.map((chat) => (
                    <div
                      key={chat.id}
                      className="card card-custom p-5 mb-5 cursor-pointer"
                      onClick={() => onGetChat(chat)}
                    >
                      <p className="fs-12 text-right">03 Mar</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <img
                            src={chat.pix}
                            alt="user"
                            className="chat-img border-radius"
                          />
                          <div className="pl-3">
                            <h3 className="fs-16 font-weight-500 line-height-2">
                              {chat.name}
                            </h3>
                            <small className="fs-14" style={{ color: "grey" }}>
                              {chat.lastMessage}
                            </small>
                          </div>
                        </div>
                        {/* <span className="menu-label">
                      <span className="label label-sm text-white font-weight-700 bg-eventplux">
                        4
                      </span>
                    </span> */}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <>
              {current ? (
                <div className="col-lg-6 mt-11">
                  <div className="card card-custom  p-5 mb-5">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <img
                          src={current.pix}
                          alt="user"
                          className="chat-img border-radius"
                        />
                        <div className="pl-5">
                          <h3 className="fs-16 font-weight-500 line-height-2">
                            {current.name}
                          </h3>
                          <small className="fs-14" style={{ color: "#27AE60" }}>
                            online
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card card-custom pl-5 pr-5 pt-5">
                    <div
                      className="d-flex flex-column "
                      style={{
                        height: "52.5vh",
                        overflowX: "hidden",
                        scrollbarWidth: "none",
                      }}
                    >
                      <ScrollableFeed className="hideScroll">
                        {chats.map((chat) => (
                          <>
                            <div
                              key={chat.id}
                              className="flex-column pb-5 max-w-400px"
                            >
                              {!chat.myChat && (
                                <div
                                  className="p-5 border-radius-10 mb-5"
                                  style={{
                                    backgroundColor: "#E5E6ED",
                                    color: "#828282",
                                  }}
                                >
                                  {chat.message}
                                </div>
                              )}
                              {/* <p>3:00pm</p> */}
                            </div>
                            {chat.myChat && (
                              <div className="d-flex flex-column align-items-end">
                                <div className="pb-5 max-w-400px text-right">
                                  <div className="p-5 border-radius-10 bg-dashboard mb-5 text-white ">
                                    {chat.message}
                                  </div>
                                  {/* <p>3:35pm</p> */}
                                </div>
                              </div>
                            )}
                          </>
                        ))}
                      </ScrollableFeed>
                    </div>

                    <div className="card card-custom">
                      <div className="card-footer align-items-center">
                        <textarea
                          className="form-control border-0 p-0"
                          rows="2"
                          name="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Type Something"
                        ></textarea>
                        <div className="d-flex align-items-center justify-content-between mt-5">
                          <div className="mr-3">
                            <span className="btn btn-clean btn-icon btn-md mr-1">
                              <img
                                data-toggle="modal"
                                data-target="#chatModal"
                                src={Image.Mic}
                                alt="mic"
                              />
                            </span>
                            {/* <Picker onEmojiClick={onEmojiClick} /> */}
                          </div>
                          <span
                            className="btn btn-icon btn-md "
                            onClick={() => onSend()}
                          >
                            <img src={Image.Send} alt="send" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="d-flex justify-content-center align-items-center w-100">
                  <p>No chat to show, start chatting!</p>
                </div>
              )}
            </>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="chatModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="staticBackdrop"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-md"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              {/* <h5
                className="left-body modal-title mx-auto"
                id="exampleModalLabel"
              >
                Account Details
              </h5> */}
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <i aria-hidden="true" className="ki ki-close"></i>
              </button>
            </div>
            <div className="modal-body pr-20 pl-20">
              <Recorder
                record={true}
                title={"New recording"}
                audioURL={audioDetails.url}
                showUIAudio
                handleAudioStop={(data) => handleAudioStop(data)}
                handleOnChange={(value) => handleOnChange(value, "firstname")}
                handleAudioUpload={(data) => handleAudioUpload(data)}
                handleReset={() => handleRest()}
              />
            </div>
            {/* <div className="mx-auto mb-7">
              <button
                type="button"
                className="btn btn-dashboard text-white text-font-700 fs-18 btn-weight-10"
              >
                Submit
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
