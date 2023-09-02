import React from "react";

const commentsData = [
  {
    name: "Anshul Garwal",
    text: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Anshul Garwal",
    text: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Anshul Garwal",
        text: "lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
    ],
  },
  {
    name: "Anshul Garwal",
    text: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Anshul Garwal",
        text: "lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Anshul Garwal",
            text: "lorem ipsum dolor sit amet, consectetur adip",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Anshul Garwal",
    text: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Anshul Garwal",
    text: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Anshul Garwal",
        text: "lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Anshul Garwal",
            text: "lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Anshul Garwal",
                text: "lorem ipsum dolor sit amet, consectetur adip",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-green-100 p-2 rounded-lg m-3">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ101E8pFB3rFg510zsDy7M0m1DZWX7qYjYg&usqp=CAU"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black ml-8">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
