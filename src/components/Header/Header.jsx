import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import './Header.css';

function Header() {
  const [search, setSearch] = useState('');
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();

    const searchTerm = search.trim();

    if (searchTerm) {
      navigate(`/produtos?filter=${encodeURIComponent(searchTerm)}`);
      setMobileSearchOpen(false);
      setMenuOpen(false);
    }
  }

  return (
    <header className="header">
      <div className="header-container">

        {/* Primeira linha: logo, pesquisa e ações */}
        <div className="header-top">

          <button
            className="header-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link to="/" className="header-logo">
            <span className="header-logo-icon">›_</span>
            <span>Digital Store</span>
          </Link>

          <form className="header-search" onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Pesquisar produto..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Pesquisar produtos"
            />
            <button type="submit" aria-label="Buscar">
              <Search size={20} />
            </button>
          </form>

          <div className="header-actions">
            <Link to="/cadastro" className="header-register">
              Cadastre-se
            </Link>

            <Link to="/login" className="header-login">
              Entrar
            </Link>

            <button className="header-cart" aria-label="Carrinho">
              <ShoppingCart size={22} />
              <span className="header-cart-count">2</span>
            </button>
          </div>

          <button
            className="header-mobile-search-button"
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            aria-label="Abrir pesquisa"
          >
            <Search size={21} />
          </button>

          <button className="header-mobile-cart" aria-label="Carrinho">
            <ShoppingCart size={22} />
            <span className="header-cart-count">2</span>
          </button>
        </div>

        {/* Pesquisa mobile */}
        {mobileSearchOpen && (
          <form
            className="header-search header-search-mobile"
            onSubmit={handleSearch}
          >
            <input
              type="search"
              placeholder="Pesquisar produto..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Pesquisar produtos"
              autoFocus
            />
            <button type="submit" aria-label="Buscar">
              <Search size={20} />
            </button>
          </form>
        )}

        {/* Segunda linha: navegação */}
        <nav className={`header-navigation ${menuOpen ? 'menu-open' : ''}`}>
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/produtos" onClick={() => setMenuOpen(false)}>
            Produtos
          </NavLink>

          <NavLink
            to="/produtos?categoria=all"
            onClick={() => setMenuOpen(false)}
          >
            Categorias
          </NavLink>

          <NavLink
            to="/meus-pedidos"
            onClick={() => setMenuOpen(false)}
          >
            Meus Pedidos
          </NavLink>
        </nav>

      </div>
    </header>
  );
}

export default Header;