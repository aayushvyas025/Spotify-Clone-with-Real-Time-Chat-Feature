
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
  rightSidebarContent:{
    loginPrompt:{
      heading:"See What Friends Are Playing",
      text:"Login to discover what music your friends are enjoying right now"
    },
    friendsActivity: {
      header: {
        title:"What they're listening to"
      },
      body:{
        musicContent: {
          notPlaying:"Idle"
        }
      }
    }
  },
  albumPageContent: {
    AlbumPageHeader:"Album",
    albumTable: {
      albumTableHeader:{
        songIndex:"#",
        songTitle:"Title",
        songReleasedDate:"Released Date"
      }
    }
  },
  homePageContent:{
    madeForYouSection:{
      title:"Made For You Songs"
    }, 
    trendingSection:{
      title:"Trending Songs"
    }
  }

} as const);


export default applicationContent;
