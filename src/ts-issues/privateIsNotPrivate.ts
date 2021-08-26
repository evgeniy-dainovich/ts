class Member {
  private secret = 'private member'
}

const member = new Member()
member.secret // Property 'secret' is private and only accessible within class 'Member'.
;(member as any).secret // works like a sharm. The privacy of members are only enforced within the compiler.
