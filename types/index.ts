export interface Tag {
    name: string,
    img: string,
}

export interface ProjectData {
    id: string,
    name: string,
    description: string,
    cover: string,
    blurDataURL:string,
    video: string,
    tags: Tag[],
    link: {
        app: string, 
        repo: string
    },
}