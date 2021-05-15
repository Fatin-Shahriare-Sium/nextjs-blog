// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mailchimp from '@mailchimp/mailchimp_marketing';
mailchimp.setConfig({
  apiKey: process.env.MAIL_CHIMP_APIKEY,
  server: process.env.MAIL_CHIMPSERVER,
});
export default async (req,res)=>{
  let {email}=req.body
  console.log('email express',email);
  if(!email){
    return res.json({
      msg:'Please,give your email'
    })
  }
  try{
    await mailchimp.lists.addListMember(process.env.MAIL_CHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed'
    });
    return res.json({
      msg:'Thanks,for subscribing'
    })
  }catch{
    res.json({
      msg:'Network,error'
    })
  }
}
