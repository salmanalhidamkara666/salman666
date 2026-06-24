import { useState } from "react";
import { Lock, AlertCircle } from "lucide-react";
import { motion } from "motion/react";
import CRMAdminSection from "./sections/CRMAdminSection";

export default function AdminLogin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  // The very complex password
  const COMPLEX_PASSWORD = "SuperAdmin@Minna2026!#$";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === COMPLEX_PASSWORD) {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (isAuthenticated) {
    return <CRMAdminSection onLogout={() => setIsAuthenticated(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
      >
        <div className="p-8 sm:p-10">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
            <Lock className="w-8 h-8" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2">
            Admin Login
          </h2>
          <p className="text-center text-gray-500 mb-8 text-sm">
            Area terbatas. Masukkan kata sandi admin yang sangat rumit untuk
            melanjutkan.
          </p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Secure Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full px-5 py-4 rounded-xl border ${error ? "border-red-300 focus:ring-red-500/20 focus:border-red-500" : "border-gray-200 focus:ring-primary/20 focus:border-primary"} outline-none transition-all placeholder:text-gray-400 font-mono`}
                  placeholder="••••••••••••••••"
                  autoFocus
                />
              </div>
              {error && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="text-red-500 text-sm mt-2 flex items-center gap-1.5"
                >
                  <AlertCircle className="w-4 h-4" />
                  Kata sandi salah. Akses ditolak.
                </motion.p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gray-900 hover:bg-black text-white rounded-xl font-bold transition-colors shadow-lg shadow-gray-900/20"
            >
              Masuk ke Dashboard
            </button>
          </form>
        </div>
        <div className="bg-gray-50 px-8 py-4 text-center border-t border-gray-100">
          <p className="text-xs text-gray-400">
            Sistem Keamanan LPK Minna No Gakkou
          </p>
        </div>
      </motion.div>
    </div>
  );
}
