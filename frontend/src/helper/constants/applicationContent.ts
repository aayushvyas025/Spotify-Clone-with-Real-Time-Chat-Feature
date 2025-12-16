type ContentValue = string | number | boolean | ContentObject | ContentValue[];

interface ContentObject{
    [key:string]: ContentValue; 
}

const applicationContent:ContentObject=
  Object.freeze({
    topBarContent:{
      title:`Groove Box`,
      topBarLink: {
        adminTopBar:`Admin Dashboard`
      }
    }
  });

export default applicationContent;
