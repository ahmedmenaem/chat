export const loadConversations = async () => {
  const conversations = [
    {
      id: 1,
      groupName: "Mom's Discharge plan",
      userName: "love one",
      message: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      unSeenMessages: 0,
      lastMessageDate: "Oct 7",
      active: true,
      avatar: "/assets/me.png",
    },
    {
      id: 2,
      groupName: "Mom's Diet",
      userName: "karen Becker",
      message: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      unSeenMessages: 0,
      lastMessageDate: "Aug 8",
      active: false,
      avatar: "/assets/profile.png",
    },
    {
      id: 3,
      groupName: "Another Baer",
      message: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      unSeenMessages: 3,
      lastMessageDate: "Nov 10",
      active: false,
      avatar: "/assets/user2.png",
    },
    {
      id: 4,
      groupName: "Easter weekend",
      userName: "love one",
      message: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      unSeenMessages: 0,
      lastMessageDate: "May 11",
      active: false,
      avatar: "/assets/user3.png",
    },
    {
      id: 5,
      groupName: "Mom's Discharge plan",
      userName: "love one",
      message: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      unSeenMessages: 0,
      lastMessageDate: "Jun 19",
      active: false,
      avatar: "/assets/me.png",
    },
    {
      id: 6,
      groupName: "Mom's Discharge plan",
      userName: "love one",
      message: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      unSeenMessages: 0,
      lastMessageDate: "Dec 7",
      active: false,
      avatar: "/assets/profile.png",
    },
    {
      id: 7,
      groupName: "Mom's Discharge plan",
      userName: "love one",
      message: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      unSeenMessages: 0,
      lastMessageDate: "Jun 1",
      active: false,
      avatar: "/assets/profile.png",
    },
    {
      id: 8,
      groupName: "Mom's Discharge plan",
      userName: "love one",
      message: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      unSeenMessages: 0,
      lastMessageDate: "Mar 2",
      active: false,
      avatar: "/assets/profile.png",
    },
    {
      id: 9,
      groupName: "Mom's Discharge plan",
      userName: "love one",
      message: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      unSeenMessages: 0,
      lastMessageDate: "Mar 8",
      active: false,
      avatar: "/assets/profile.png",
    },
    {
      id: 10,
      groupName: "Mom's Discharge plan",
      userName: "love one",
      message: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      unSeenMessages: 0,
      lastMessageDate: "Oct 7",
      active: false,
      avatar: "/assets/profile.png",
    },
    {
      id: 11,
      groupName: "Mom's Discharge plan",
      message: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      unSeenMessages: 0,
      lastMessageDate: "Oct 7",
      active: false,
      avatar: "/assets/profile.png",
    },
    {
      id: 13,
      groupName: "Mom's Discharge plan",
      userName: "love one",
      message: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      unSeenMessages: 0,
      lastMessageDate: "Oct 7",
      active: false,
      avatar: "/assets/profile.png",
    },
    {
      id: 14,
      groupName: "Mom's Discharge plan",
      message: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      unSeenMessages: 0,
      lastMessageDate: "Oct 7",
      active: false,
      avatar: "/assets/profile.png",
    },
    {
      id: 15,
      groupName: "Mom's Discharge plan",
      userName: "love one",
      message: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      unSeenMessages: 0,
      lastMessageDate: "Oct 7",
      active: false,
      avatar: "/assets/profile.png",
    },
    {
      id: 16,
      groupName: "Mom's Discharge plan",
      userName: "love one",
      message: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      unSeenMessages: 0,
      lastMessageDate: "Oct 7",
      active: false,
      avatar: "/assets/profile.png",
    },
  ];

  return new Promise((resolve, reject) => {
    resolve(conversations);
  });
};

export const loadConversationMessages = (conversationId) => {
  // types (messages or todo)
  const conversationMessages = [
    {
      type: "todo",
      messageSender: "me",
      senderAvatar: "/assets/me.png",
      sentTime: "12:00p",
      todoItem: {
        title: "Daily grooming assistance",
        time: "Dec 1",
        repeatedTime: "Daily",
        body:
          "assist with daily grooming activities such as bathing, teeth, hair",
        isCompleted: true,
        by: "Derek Smith",
        userAvatar: "/assets/me.png",
        doneAt: "Mar 23 3:23p",
      },
    },
    {
      type: "log",
      header: "Chest Pain",
      messageSender: "user2",
      senderAvatar: "/assets/user2.png",
      sentTime: "09:12a",
      list: [
        {
          time: "FRI Oct 12 4:27 PM",
          loggedBy: "kbecker@gmail.com completed - THU Oct 11 3:29 PM",
          action: {
            text: "Severe",
            icon: "/assets/crying_emoji.png",
          },
        },
      ],
    },
    {
      type: "message",
      header: "",
      messageSender: "user3",
      senderAvatar: "/assets/user3.png",
      sentTime: "09:12a",
      messageBody:
        "I moved Karen’s knitting kit from the study upstairs to the the living room",
    },
    {
      type: "message",
      header: "",
      messageSender: "me",
      senderAvatar: "/assets/me.png",
      sentTime: "09:12a",
      messageBody:
        "That’s a good call. I’ll be stopping by later to have dinner with her. Pizza for everyone! Join us. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a lorem enim. Praesent accumsan feugiat lorem et finibus. Vestibulum scelerisque id eros dignissim tincidunt. Morbi id tortor egestas, feugiat massa viverra, posuere nisl.",
    },
    {
      type: "message",
      header: "",
      messageSender: "me",
      senderAvatar: "/assets/me.png",
      sentTime: "09:12a",
      messageBody:
        "That’s a good call. I’ll be stopping by later to have dinner with her. Pizza for everyone! Join us. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a lorem enim. Praesent accumsan feugiat lorem et finibus. Vestibulum scelerisque id eros dignissim tincidunt. Morbi id tortor egestas, feugiat massa viverra, posuere nisl.",
    },
    {
      type: "message",
      header: "",
      messageSender: "me",
      senderAvatar: "/assets/me.png",
      sentTime: "09:12a",
      messageBody:
        "That’s a good call. I’ll be stopping by later to have dinner with her. Pizza for everyone! Join us. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a lorem enim. Praesent accumsan feugiat lorem et finibus. Vestibulum scelerisque id eros dignissim tincidunt. Morbi id tortor egestas, feugiat massa viverra, posuere nisl.",
    },
    {
      type: "message",
      header: "",
      messageSender: "me",
      senderAvatar: "/assets/me.png",
      sentTime: "09:12a",
      messageBody:
        "That’s a good call. I’ll be stopping by later to have dinner with her. Pizza for everyone! Join us. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a lorem enim. Praesent accumsan feugiat lorem et finibus. Vestibulum scelerisque id eros dignissim tincidunt. Morbi id tortor egestas, feugiat massa viverra, posuere nisl.",
    },
    {
      type: "message",
      header: "",
      messageSender: "me",
      senderAvatar: "/assets/me.png",
      sentTime: "09:12a",
      messageBody:
        "That’s a good call. I’ll be stopping by later to have dinner with her. Pizza for everyone! Join us. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a lorem enim. Praesent accumsan feugiat lorem et finibus. Vestibulum scelerisque id eros dignissim tincidunt. Morbi id tortor egestas, feugiat massa viverra, posuere nisl.",
    },
  ];

  return new Promise((resolve, reject) => {
    resolve(conversationMessages);
  });
};
