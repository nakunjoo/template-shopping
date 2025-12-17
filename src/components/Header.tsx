import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Header = () => {
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold text-blue-600">
                            <Link to="/">ShopTemplate</Link>
                        </h1>
                        <nav className="hidden md:flex items-center space-x-8 ml-10">
                            <NavLink to="/products" className={({isActive}) => (isActive ? 'text-blue-600 font-medium transition-colors' : 'text-gray-700 hover:text-blue-600 font-medium transition-colors')}>상품</NavLink>
                            <a href="#ranking" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">랭킹</a>
                            <a href="#sale" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">세일</a>
                            <a href="#event" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">이벤트</a>
                        </nav>
                    </div>

                    

                    <div className="flex items-center gap-3">
                        <div className="hidden sm:flex items-center bg-gray-100 rounded-lg px-3 py-2">
                            <input
                            type="text"
                            placeholder="상품 검색..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-transparent outline-none text-sm w-40 lg:w-60"
                            />
                            <button className="text-gray-500 hover:text-gray-700">🔍</button>
                        </div>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">🛒</button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">❤️</button>
                        <button className="hidden sm:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">로그인</button>
                    </div>
                </div>
            </div>
      </header>
    )
}