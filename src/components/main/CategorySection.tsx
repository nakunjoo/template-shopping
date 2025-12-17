import type { CategoryData } from "../../pages/main"

export const CategorySection = ({categories}:{categories: CategoryData[]}) => {

    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-5">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">카테고리</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
                {categories.map(category => (
                <div
                    key={category.id}
                    className="bg-white p-8 rounded-2xl text-center cursor-pointer transition-all border border-gray-200 hover:-translate-y-1 hover:shadow-lg hover:border-blue-600"
                >
                    <span className="text-5xl block mb-3">{category.icon}</span>
                    <h3 className="text-base font-semibold text-gray-900">{category.name}</h3>
                </div>
                ))}
            </div>
            </div>
        </section>
    )
}