import { blog1, blog3, blog4, blog5, blog6, blog7, blog8, userImage } from "./importImage"

const postCategory = [
    {
        id: 1,
        name:"technology",
        count:23
    },
    {
        id: 2,
        name:"Lifestyle",
        count:20
    },
    {
        id: 3,
        name:"Fashion",
        count:16
    },
    {
        id: 4,
        name:"Art",
        count:12
    },
    {
        id: 5,
        name:"Food",
        count:12
    },
    {
        id: 6,
        name:"Architecture",
        count:13
    }
]

const allPosts = [
    {
        id : 1,
        name: "Programmin C",
        image: blog1,
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui rsed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet soluta laborum, sed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet soluta laborum, sed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet solutsed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet soluta laborum, sed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet soluta laborum, sed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet solutsed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet soluta laborum, sed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet soluta laborum, sed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet solutsed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet soluta laborum, sed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet soluta laborum, sed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur",
        date: "2022 jan 20",
        category:["programming", "technology"],
        user: "sajjadul islam",
        userImage: userImage,
        likes: 12,
        comments:[
            {
                user: "rabby",
                userImage: blog3,
                userId: 2,
                text: "Good Programming article"
            },
            {
                user: "sakib",
                userImage: blog6,
                userId: 3,
                text: "Thank for this article.."
            },
            {
                user: "sabbir",
                userId: 4,
                userImage: blog8,
                text: "Great expilation"
            },
        ]
    },
    {
        id : 2,
        name: "Programmin Java",
        image: blog5,
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui rsed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet soluta laborum, sed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet soluta laborum, sed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet solutsed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet soluta laborum, sed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet soluta laborum, sed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet solutsed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet soluta laborum, sed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet soluta laborum, sed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet solutsed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet soluta laborum, sed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet soluta laborum, sed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur",
        date: "2021 jul 10",
        category:["Java", "Programming", "technology"],
        user: "shaharin islam",
        userImage: userImage,
        likes: 12,
        comments:[
            {
                user: "asif",
                userImage: blog3,
                userId: 2,
                text: "Good Programming article",
                date:"20-02-2022",
            },
            {
                user: "sakib",
                userImage: blog4,
                userId: 3,
                text: "Thank for this article..",
                date:"24-04-2022",
            },
            {
                user: "jewel",
                userId: 4,
                userImage: blog8,
                text: "Great expilation",
                date:"04-02-2022",
            },
        ]
    },
    {
        id : 3,
        name: "Programmin Java",
        image: blog4,
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui rsed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet soluta laborum, sed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet soluta laborum, sed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet solutsed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet soluta laborum, sed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet soluta laborum, sed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet solutsed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet soluta laborum, sed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet soluta laborum, sed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet solutsed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet soluta laborum, sed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet soluta laborum, sed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur",
        date: "2021 jul 10",
        category:["Java", "Programming", "technology"],
        user: "ridoy islam",
        userImage: userImage,
        likes: 34,
        comments:[
            {
                user: "shaharin",
                userImage: blog3,
                userId: 2,
                text: "Good Programming article",
                date:"20-02-2022",
            },
            {
                user: "abir",
                userImage: blog4,
                userId: 3,
                text: "Thank for this article..",
                date:"24-04-2022",
            },
            {
                user: "hasan",
                userId: 4,
                userImage: blog8,
                text: "Great expilation",
                date:"04-02-2022",
            },
        ]
    },
    {
        id : 4,
        name: "Python",
        image: blog7,
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui rsed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet soluta laborum, sed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet soluta laborum, sed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet solutsed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet soluta laborum, sed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet soluta laborum, sed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet solutsed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet soluta laborum, sed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet soluta laborum, sed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet solutsed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet soluta laborum, sed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel ipsam qui recusandae dicta sequi voluptates illo ratione ut dolorum aut magni a corrupti eveniet soluta laborum, sed delectus aspernatur.Lorem ipsum dolor sit, amet consectetur",
        date: "2021 jul 10",
        category:["Java", "Programming", "technology"],
        user: "shaharin islam",
        userImage: userImage,
        likes: 12,
        comments:[
            {
                user: "asif",
                userImage: blog3,
                userId: 2,
                text: "Good python article",
                date:"20-08-2022",
            },
            {
                user: "sakib",
                userImage: blog4,
                userId: 3,
                text: "Thank for python article..",
                date:"20-07-2022",
            },
            {
                user: "jewel",
                userId: 4,
                userImage: blog8,
                text: "Great python expilation",
                date:"11-02-2022",
            },
        ]
    },

]

export {postCategory, allPosts}