
import { useState } from "react";

function AuthModal({ mode, onClose, onSwitch }) {
  const initialForm = {
    nom: "",
    email: "",
    password: "",
    confirmation: "",
    option: ""
  };

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  // Update form fields
  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });

    // Remove the error when the user edits the field
    setErrors({
      ...errors,
      [name]: ""
    });
  }

  // Validate and submit
  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    // Common validation
    if (!form.email.trim()) {
      newErrors.email = "L'email est obligatoire.";
    } else if (!form.email.includes("@")) {
      newErrors.email = "L'email doit contenir @.";
    }

    if (!form.password) {
      newErrors.password = "Le mot de passe est obligatoire.";
    }

    // Registration validation
    if (mode === "inscription") {
      if (form.nom.trim().length < 3) {
        newErrors.nom = "Le nom doit contenir au moins 3 caractères.";
      }

      if (form.password.length < 6) {
        newErrors.password = "Minimum 6 caractères.";
      }

      if (form.confirmation !== form.password) {
        newErrors.confirmation = "Les mots de passe ne correspondent pas.";
      }

      if (!form.option) {
        newErrors.option = "Veuillez choisir une option.";
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Demonstration only: no backend authentication
    if (mode === "inscription") {
      alert(`Bienvenue, ${form.nom} !`);
    } else {
      alert("Connexion réussie !");
    }

    setForm(initialForm);
    setErrors({});
    onClose();
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <h2>
          {mode === "connexion" ? "Connexion" : "Inscription"}
        </h2>

        <p>
          {mode === "connexion"
            ? "Connectez-vous à votre compte."
            : "Créez votre compte dès maintenant."}
        </p>

        <form onSubmit={handleSubmit}>

          {mode === "inscription" && (
            <>
              <label>Nom complet</label>
              <input
                type="text"
                name="nom"
                value={form.nom}
                onChange={handleChange}
                placeholder="Votre nom"
              />
              {errors.nom && <small>{errors.nom}</small>}

              <label>Option</label>
              <select
                name="option"
                value={form.option}
                onChange={handleChange}
              >
                <option value="">Choisir une option</option>
                <option value="Full Stack">Développement Full Stack</option>
                <option value="Autre">Autre</option>
              </select>
              {errors.option && <small>{errors.option}</small>}
            </>
          )}

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="exemple@email.com"
          />
          {errors.email && <small>{errors.email}</small>}

          <label>Mot de passe</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Votre mot de passe"
          />
          {errors.password && <small>{errors.password}</small>}

          {mode === "inscription" && (
            <>
              <label>Confirmer le mot de passe</label>
              <input
                type="password"
                name="confirmation"
                value={form.confirmation}
                onChange={handleChange}
                placeholder="Confirmer le mot de passe"
              />
              {errors.confirmation && (
                <small>{errors.confirmation}</small>
              )}
            </>
          )}

          <button type="submit" className="modal-submit">
            {mode === "connexion" ? "Se connecter" : "S'inscrire"}
          </button>
        </form>

        <p className="switch-auth">
          {mode === "connexion"
            ? "Vous n'avez pas de compte ?"
            : "Vous avez déjà un compte ?"}

          <button type="button" onClick={() => {
            setForm(initialForm);
            setErrors({});
            onSwitch();
          }}>
            {mode === "connexion" ? "Inscription" : "Connexion"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default AuthModal;
