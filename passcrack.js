const fs = require('fs');
const crypto = require('crypto');

fs.readFile('password.txt', 'utf8', (err, data) => {
  if (err) throw err;

  const passwordList = data.split('\n');
  const salt = "$6$8HOLitkI";
  const knownHash = "$6$8HOLitkI$9HECw2MBzISI1O.RoyJdfugy4VHsTOU4RDTewcFECnZdWLpmtVwNo5a1/hg2kw4Qu74F08eMEwpLdK1eovfEd/";

  for (let i = 0; i < passwordList.length; i++) {
    const password = passwordList[i].trim();
    const hash = crypto.createHash('sha512').update(salt + password).digest('hex');

    if (hash === knownHash) {
      console.log(`password found: ${password}`);
      break;
    } else {
      console.log("trying....");
    }
  }
});
