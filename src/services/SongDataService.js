import http from "../http-common";
class SongDataService {
  getAllSongs(albumId) {
    return http.get(`/albums/${albumId}/songs`);
  }
  getSong(albumId,id) {
    return http.get(`/albums/${albumId}/songs/${id}`);
  }
  createSong(albumId,data) {
    return http.post(`/albums/${albumId}/songs`, data);
  }
  updateSong(albumId,id, data) {
    return http.put(`/albums/${albumId}/songs/${id}`, data);
  }
  deleteSong(albumId,id) {
    return http.delete(`/albums/${albumId}/songs/${id}`);
  }
  deleteAllSongs(albumId) {
    return http.delete(`/albums/${albumId}/all/songs`);
  }
  searchSong(albumId,title) {
    return http.get(`/albums/${albumId}/songs?title=${title}`);
  }
}
export default new SongDataService();