const express = require('express');
const router = express.Router();

const languages = ['ru','en'];

router.get('/',function(req,res){
    console.log('accessed the basic GET');
    res.render('index.html');
});

router.get('/:lang/',function(req,res){
    let lang = req.params.lang;
    console.log('lang is:',lang);
    if(languages.indexOf(lang)==-1){
        res.statusCode = '404';
        res.send({'statusCode': '404','errMsg': 'Page not found'});
    }else{
        res.render('index.html');
    }
});

router.post('/emails/passwords',function(req,res){
    let body = 'Hi, '+req.body.userName+'\n\nYour account\'s password has been temporarily reset to:\n\n'+ req.body.password;

    let mailOptions = {
        to: req.body.to,
        subject: 'Resetting password over email',
        text: body
    };

    transporter.sendMail(mailOptions,function(err,info){
        if(err){
            console.log(err);
        }else{
            console.log('Email sent: '+ info.response);
        }

        res.statusCode='200';
        res.send('Email sent: '+info.response);
    });

});

module.exports = router;
