exports.validateCreation = (req, res, next) => {
    
    const { username, email, password } = req.body;
  
    const usernameRegex = /^[a-zA-Z0-9_-]{5,15}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!usernameRegex.test(username)) {
      return res.status(400).json({ error: 'Le nom d\'utilisateur doit être entre 5 et 15 caractères sans caractères spéciaux.' });
    }
  
    if (!passwordRegex.test(password)) {
      return res.status(400).json({ error: 'Le mot de passe doit contenir au moins 8 caractères dont une majuscule, une minuscule, un caractère spécial et un chiffre.' });
    }
  
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'L\'adresse e-mail doit être au format d\'un e-mail classique.' });
    }
  
    next();

  }