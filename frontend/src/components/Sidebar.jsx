
export default function Sidebar({ userName, onLogout }) {

    return (
        <aside className="bg-violet-900 text-white w-30 min-h-screen">
          <div className="p-4">
            {/* Título */}
            <h2 className="text-lg font-bold mb-4">Dashboard</h2>
            
            {/* Nombre del Usuario */}
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center mr-2">
                <span className="text-white">{userName ? userName.charAt(0).toUpperCase() : ''}</span>
              </div>
              <span>{userName}</span>
            </div>
            
            {/* Botón Cerrar Sesión */}
            <button onClick={onLogout} className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-green-900 ">Cerrar Sesión</button>
          </div>
        </aside>
      );
};

