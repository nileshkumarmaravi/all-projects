setInterval(() => {
    date = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime =d.getseconds();
    hrotation = 30*htime + mtime/2;
    mrotation =6*mtime;
    srotation =6*stime;


    hours.style.transform ='rotate(${hrpotation}deg)';
    minutes.style.transform ='ratate(${mrotation}deg)';
    seconds.style.transform ='ratate(${srotation}deg)';

} ,1000 );