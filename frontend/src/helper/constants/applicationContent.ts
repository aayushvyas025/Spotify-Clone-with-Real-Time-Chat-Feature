
export const applicationContent = Object.freeze({
  topBarContent: {
    title: "Groove Box",
    topBarLink: {
      adminTopBar: "Admin Dashboard",
    },
  },
  leftSidebarContent: {
    navigation:{
      home:"Home",
      message:"Messages"
    },
    sidebarPlaylist:{
     title:"Playlists"
    }
  },
  rightSidebarContent:{},
  albumPageContent: {
    albumTable: {
      albumTableHeader:{
        songIndex:"#",
        songTitle:"Title",
        songReleasedDate:"Released Date"
      }
    }
  }
} as const);


export default applicationContent;
