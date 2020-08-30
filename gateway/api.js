import axios from 'axios';

const maePaySohAPI = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 10000,
  headers: {
    'api-key': process.env.API_KEY,
  },
});

export function getCandidates({
  wardId,
  house,
  name,
  itemsPerPage = 25,
  page,
}) {
  return maePaySohAPI.get('/candidates', {
    params: {
      ward_id: wardId,
      house,
      name,
      items_per_page: itemsPerPage,
      page,
    },
  })
    .catch(console.error);
}

export function getCandidateById(id) {
  return maePaySohAPI.get(`/candidates/${id}`)
    .catch(console.error);
}

export function getBallots() {
  return maePaySohAPI.get('/ballots')
    .catch(console.error);
}

export function getFAQ({
  page,
  itemPerPage = 25,
  name,
  category,
}) {
  return maePaySohAPI.get('/faq', {
    params: {
      page,
      item_per_page: itemPerPage,
      name,
      category,
    }
  })
    .catch(console.error);
}

export function getFAQById(id) {
  return maePaySohAPI.get(`/faqs/${id}`)
    .catch(console.error);
}

export function getStateRegion() {
  return maePaySohAPI.get('/locality/state_regions')
    .catch(console.error);
}

export function getTownships(stateRegionPCode) {
  return maePaySohAPI.get('/townships', {
    params: {
      state_region_pcode: stateRegionPCode,
    }
  })
    .catch(console.error);
}

export function getWards(townshipPcode) {
  return maePaySohAPI.get('/wards', {
    params: {
      township_pcode: townshipPcode,
    }
  })
    .catch(console.error);
}

export function getNews({
    page,
    itemPerPage = 25,
}) {
  return maePaySohAPI.get('/news', {
    params: {
      page,
      item_per_page: itemPerPage,
    }
  })
    .catch(console.error);
}

export function getParty({
  page,
}) {
  return maePaySohAPI.get('/parties', {
    params: {
      page,
    },
  })
    .catch(console.error);
}

export function getPartyById(id) {
  return maePaySohAPI.get(`parties/${id}`)
    .catch(console.error);
}