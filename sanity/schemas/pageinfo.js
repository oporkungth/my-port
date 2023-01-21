export default {
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    {
      name: "name",
      tiltle: "Name",
      type: "string",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "MyImage",
      tiltle: "Image",
      type: "image",
      options:{
        hotspot: true,
      },
    },
    {
      name: "backgroundInfo",
      title: "BackgroundInfo",
      type: "string",
    },
    {
      name: "profilePic",
      tiltle: "ProfilePic",
      type: "image",
      options:{
        hotspot: true,
      },
    },{
      name: "phoneNumber",
      title: "PhoneNumber",
      type: "string",
    },{
      name: "email",
      title: "Email",
      type: "string",
    },{
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "socials",
      title: "Socials",
      type: "array",
      of: [{type: "reference" , to: {type: "social"}}],
    },
  ],
};
