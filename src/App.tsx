import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Alterado para 'react-router-dom'
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import Funcionarios from "./pages/Funcionarios/ListaFuncionarios";
import CadastrarFuncionario from './pages/Funcionarios/CadastrarFuncionario';
import EditarFuncionario from './pages/Funcionarios/EditarFuncionario';
import Usuarios from "./pages/Usuarios/ListaUsuarios";
import CadastrarUsuario from './pages/Usuarios/CadastrarUsuario';
import EditarUsuario from './pages/Usuarios/EditarUsuario';
import PermissoesUsuario from './pages/Usuarios/PermissoesUsuario';
import Clientes from "./pages/Clientes/ListaClientes";
import CadastrarCliente from './pages/Clientes/CadastrarCliente';
import EditarCliente from './pages/Clientes/EditarCliente';
import Fornecedor from "./pages/Fornecedor/ListaFornecedor";
import CadastrarFornecedor from './pages/Fornecedor/CadastrarFornecedor';
import EditarFornecedor from './pages/Fornecedor/EditarFornecedor';
import Representante from "./pages/Representante/ListaRepresentante";
import CadastrarRepresentante from './pages/Representante/CadastrarRepresentante';
import EditarRepresentante from './pages/Representante/EditarRepresentante';
import Equipamentos from "./pages/Equipamentos/ListaEquipamento";
import CadastrarEquipamento from './pages/Equipamentos/CadastrarEquipamento';
import EditarEquipamento from './pages/Equipamentos/EditarEquipamento';
import Produtos from "./pages/Produtos/ListaProduto";
import CadastrarProduto from './pages/Produtos/CadastrarProduto';
import EditarProduto from './pages/Produtos/EditarProduto';
import Pedidos from "./pages/Pedidos/ListaPedido";
import CadastrarPedido from './pages/Pedidos/CadastrarPedido';
import EditarPedido from './pages/Pedidos/EditarPedido';
import Planos from './pages/Planos/ExibirPlanos';
import CadastroAvulso from './pages/PedidoExterno/CadastroAvulso';
import Fatura from './pages/Fatura/ExibirFatura';
import Operacionais from './pages/Operacional/ListaOperacional';
import CadastrarOperacional from './pages/Operacional/CadastrarOperacional';
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";


export default function App() {
  return (
    <>
      <Router  basename="/sistema-agencia">
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />

            {/* Funcionario */}
            <Route path="/funcionarios" element={<Funcionarios />} />
            <Route path="/funcionarios/cadastrar-funcionario" element={<CadastrarFuncionario />} />
            <Route path="/funcionarios/editar-funcionario" element={<EditarFuncionario />} />

            {/* Usuários */}
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/usuarios/cadastrar-usuario" element={<CadastrarUsuario />} />
            <Route path="/usuarios/editar-usuario" element={<EditarUsuario />} />
            <Route path="/usuarios/permissoes-usuario" element={<PermissoesUsuario />} />

            {/* Clientes */}
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/clientes/cadastrar-cliente" element={<CadastrarCliente />} />
            <Route path="/clientes/editar-cliente" element={<EditarCliente />} />
            
            {/* Fornecedor */}
            <Route path="/fornecedor" element={<Fornecedor />} />
            <Route path="/fornecedor/cadastrar-fornecedor" element={<CadastrarFornecedor />} />
            <Route path="/fornecedor/editar-fornecedor" element={<EditarFornecedor />} />

            {/* Representante */}
            <Route path="/representante" element={<Representante />} />
            <Route path="/representante/cadastrar-representante" element={<CadastrarRepresentante />} />
            <Route path="/representante/editar-representante" element={<EditarRepresentante />} />
            
            {/* Equipamentos */}
            <Route path="/equipamentos" element={<Equipamentos />} />
            <Route path="/equipamentos/cadastrar-equipamento" element={<CadastrarEquipamento />} />
            <Route path="/equipamentos/editar-equipamento" element={<EditarEquipamento />} />
            
            {/* Produto */}
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/produtos/cadastrar-produto" element={<CadastrarProduto />} />
            <Route path="/produtos/editar-produto" element={<EditarProduto />} />

            {/* Pedido */}
            <Route path="/pedidos" element={<Pedidos />} />
            <Route path="/pedidos/cadastrar-pedido" element={<CadastrarPedido />} />
            <Route path="/pedidos/editar-pedido" element={<EditarPedido />} />
          
            {/* Planos */}
            <Route path="/planos" element={<Planos />} />

            {/* Faturas */}
            <Route path="/fatura" element={<Fatura />} />

            {/* PedidoAvulso */}
            {/* <Route path="/cadastro-avulso" element={<CadastroAvulso />} /> */}
            {/* <Route path="/cadastro-avulso/:token" element={<CadastroAvulso />} /> */}
        
            <Route path="/operacionais" element={<Operacionais />} />
            <Route path="/operacionais/cadastrar-operacional" element={<CadastrarOperacional />} />

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />

          {/* Rota externa sem layout pedido avulso*/}
      <Route path="/cadastro-avulso" element={<CadastroAvulso />} />

        </Routes>
        
      </Router>
      
    </>
  );
}
