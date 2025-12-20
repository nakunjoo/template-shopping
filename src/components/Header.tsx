import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useAuth";
import { useGetUser } from "../hooks/useUser";

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { data: user } = useGetUser();
  const logout = useLogout();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">
              <Link to="/">ShopTemplate</Link>
            </h1>
            <nav className="hidden md:flex items-center space-x-8 ml-10">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-medium transition-colors"
                    : "text-gray-700 hover:text-blue-600 font-medium transition-colors"
                }
              >
                상품
              </NavLink>
              <a
                href="#ranking"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                랭킹
              </a>
              <a
                href="#sale"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                세일
              </a>
              <a
                href="#event"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                이벤트
              </a>
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
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              🛒
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              ❤️
            </button>
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
                >
                  {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200">
                    <div className="px-4 py-2 border-b border-gray-200">
                      <p className="text-sm font-semibold text-gray-800">
                        {user.name || "사용자"}
                      </p>
                      <p className="text-xs text-gray-500">
                        {user.email || ""}
                      </p>
                    </div>

                    <Link
                      to="/mypage"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      마이페이지
                    </Link>

                    <Link
                      to="/orders"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      주문내역
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition-colors"
                    >
                      로그아웃
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden sm:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                로그인
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
