import { promises as fs } from 'fs';

export type dataTypes = {
    id: number
    name: string
    description: string
    gallery: {
        first: {
        mobile: string
        tablet: string
        desktop: string
        }
        second: {
        mobile: string
        tablet: string
        desktop: string
        }
        third: {
        mobile: string
        tablet: string
        desktop: string
        }
    }
    includes: {
        quantity: number
        item: string
    }[]
    image: {
        mobile: string
        tablet: string
        desktop: string
    }
    category: string
    categoryImage: {
        mobile: string
        tablet: string
        desktop: string
    }
    price: number
    new: boolean
    slug: string
    others: {
        slug: string
        name: string
        image: {
        mobile: string
        tablet: string
        desktop: string
        }
    }[]
}[]

const file = await fs.readFile(process.cwd() + '/src/app/data.json', 'utf8')

export const data:dataTypes = JSON.parse(file)
