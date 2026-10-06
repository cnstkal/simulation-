export const CHARACTERS = {
  yunho:{id:'yunho',name:'정윤호',birth:'1999-03-23',height:186,body:'슬렌더한 편이지만 기본적인 뼈대가 있는 체형',skin:'하얀 편',face:'눈꼬리가 내려간 전형적인 강아지상',personality:['사람을 좋아함','누구에게나 다정함','친절한 편','승부욕이 강함','두뇌회전이 빠름'],appearance:'키가 크고 길쭉한 슬렌더 체형이지만 지나치게 마른 체형은 아니다. 기본적인 골격이 있으며 전체적인 인상은 부드럽고 친근하다. 내려간 눈꼬리 때문에 강아지 같은 인상을 준다.'},
  hongjoong:{id:'hongjoong',name:'김홍중',birth:'1998-11-07',height:171,body:'왜소한 편',handsFeet:'손과 발이 모두 작은 편',face:'동안이며 귀엽게 생긴 편',personality:['리더십이 강함','강단이 있음','책임감이 강함'],appearance:'체격은 작은 편이지만 존재감이 강하다. 동안에 가까운 귀여운 얼굴과 강한 리더십이 대비된다.'},
  seonghwa:{id:'seonghwa',name:'박성화',birth:'1998-04-03',height:178,body:'슬렌더하면서 근육질',skin:'매우 어두운 편',face:'뱀이나 맹수를 연상시키는 날카로운 인상',personality:['승부욕이 강하지 않음','웬만하면 상대에게 져주는 편','경쟁 상황에서도 유연함'],appearance:'슬렌더한 체형에 근육이 잡혀 있다. 피부가 어두운 편이며 부드러운 훈남 이미지보다는 뱀이나 맹수처럼 날카롭고 강한 인상을 준다.'},
  yeosang:{id:'yeosang',name:'강여상',birth:'1999-06-15',height:176,body:'근육질',skin:'하얀 편',face:'눈이 크고 조각처럼 생긴 얼굴',personality:['특이하고 엉뚱함','착한 성격','독특한 사고방식'],appearance:'하얀 피부와 근육질 체형을 가지고 있으며 크고 또렷한 눈과 조각 같은 얼굴이 특징이다.'},
  san:{id:'san',name:'최산',birth:'1999-07-10',height:176,body:'근육질',skin:'살짝 까무잡잡한 편',face:'눈꼬리가 찢어져 있고 다소 무서운 인상',personality:['좋아하는 것에는 매우 유해짐','의리가 많음','살짝 우악스러움','겉보기보다 정이 많음'],appearance:'근육질 체형에 살짝 어두운 피부톤을 가지고 있다. 찢어진 눈 때문에 첫인상은 다소 무섭고 강해 보인다.'},
  mingi:{id:'mingi',name:'송민기',birth:'1999-08-09',height:185,body:'뼈대가 큰 편',face:'찢어진 눈과 각진 얼굴',personality:['마이웨이 성향','자기만의 세계가 강함','다소 까칠함','다소 싸가지 없는 면','타인의 시선에 크게 휘둘리지 않음'],appearance:'큰 골격과 185cm의 큰 키를 가지고 있다. 찢어진 눈과 각진 얼굴 때문에 날카롭고 무뚝뚝한 인상을 준다.'},
  wooyoung:{id:'wooyoung',name:'정우영',birth:'1999-11-27',height:173,body:'슬렌더하면서 근육질',skin:'까무잡잡한 편',face:'눈이 크고 중화권 느낌의 미남',eyes:'올라간 눈매',personality:['사람을 좋아함','친화력이 있음','예민한 면이 있음','치와와 같은 성격','작지만 성격이 강한 면'],appearance:'슬렌더하면서 탄탄한 체형이다. 까무잡잡한 피부와 큰 눈, 올라간 눈매가 특징이다.'},
  jongho:{id:'jongho',name:'최종호',birth:'2000-10-12',height:174,body:'몸 자체가 단단하고 탄탄함',skin:'까무잡잡한 편',face:'적당히 평범한 편',personality:['덤덤한 편','감정 표현이 크지 않음','평소에는 차분함','화가 나면 정말 크게 화냄'],appearance:'화려하게 잘생긴 타입보다는 자연스럽고 친근한 인상의 외모다. 몸은 단단하고 탄탄하며 피부는 까무잡잡한 편이다.'}
};
export const CHARACTER_ORDER = ['yunho','hongjoong','seonghwa','yeosang','san','mingi','wooyoung','jongho'];
export function resolveCharacter(baseId, gameOverrides = {}) { return {...CHARACTERS[baseId], ...(gameOverrides[baseId] || {}), baseId}; }
