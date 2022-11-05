export interface Course{
    _id: string,
    title?: string,
    subTitle?: string,
    description?: string,
    thumbnail: string,
    duration?: number,
    lectures?: number,
    instructor?: string,
    rating?: number,
    enrolled?: number,
    originalPrice?: number,
    currentPrice?: number,
    label?: string
}

export interface CourseType{
    title?: string,
    subTitle?: string,
    description?: string,
    thumbnail: string,
    duration?: number,
    lectures?: number,
    instructor?: string,
    rating?: number,
    enrolled?: number,
    originalPrice?: number,
    currentPrice?: number,
    label?: string
}