const Database = require('./db.js')
const createProffy = require('./createProffy')


Database.then(async (db) => {
     // inserir dados

     proffyValue =  {
        name: "Marcelo Alves",
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=400&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4", 
        whatsapp: "4002 8922", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 Pessoas já passaram por uma das ultimas explosões",
     }

     classValue = {
        subject: 1, 
        cost:"20", 
     }

     classScheduleValues = [
         {
           weekday: 1,
           time_from: 720,
           time_to: 1228
         },
         {
            weekday: 1,
            time_from: 520,
            time_to: 1228
          },
     ]

    await createProffy(db, {proffyValue, classValue, classScheduleValues})




    //consutlar todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    // consultar as classes de um determinado professor
    // e trazer junto os dados do professor
    const selectclassesAndProffys = await db.all(`
         SELECT classes.*, proffys.*  
         FROM proffys
         JOIN classes ON (classes.proffy_id = proffys.id)
         WHERE classes.proffy_id = 1
    `)

   // console.log(selectclassesAndProffys)

    // o horário que a passa pessoa trabalha
    // o horario do time from_from precisa ser menr que ao horario solicitado
    // time to _precisa ser acima
    const selectClasseSchedules = await db.all(`
         SELECT class_schedule.*
         FROM class_schedule
         WHERE class_schedule.class_id = "1"
         AND class_schedule.weekday = "6"
         AND class_schedule.time_from <= "1300"
         AND class_schedule.time_to > "1300"
    `)

    console.log(selectClasseSchedules)
})