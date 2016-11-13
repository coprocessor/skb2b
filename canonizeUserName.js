/**
* parsing token user name and return surname and initials user
* @param name - contain input user name
*/

export default function canonizeUserName(name) {
  const re = new RegExp('([ ]*)?([a-zёа-яóÓ]{2,20})?([ \'.]*)?([a-zёа-яóÓ]*)?([ \'.]*)?([a-zёа-яóÓ]*)?([ \'.]*)?([a-zёа-яóÓ0-9-+\/\\_]*)?', 'i');
  var fullname = name.match(re);
  var userName = 'Invalid fullname';
  if (!fullname[2]) return userName;
  if (!fullname[8]) {
    userName = (fullname[6] ? fullname[6].charAt(0).toUpperCase() + fullname[6].slice(1).toLowerCase() + ' ' : '') +
               (!fullname[4] ? '' :
               (!fullname[6] ? (fullname[4].charAt(0).toUpperCase() + fullname[4].slice(1).toLowerCase() + ' ') : (fullname[4].slice(0,1).toUpperCase() + '. '))) +
               (!fullname[4] ? (fullname[2].charAt(0).toUpperCase() + fullname[2].slice(1).toLowerCase()) : (fullname[2].slice(0,1).toUpperCase() + '.'));
  }
  return userName;
}
