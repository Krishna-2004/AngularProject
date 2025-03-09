// song.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private apiUrl = 'http://localhost:3000/api/songs';

  constructor(private http: HttpClient) { }

  getAllSongs() {
    return this.http.get(this.apiUrl);
  }

  addSong(songData: any) {
    return this.http.post(this.apiUrl, songData);
  }

  updateSong(songId: string, songData: any) {
    return this.http.put(`${this.apiUrl}/${songId}`, songData);
  }

  deleteSong(songId: string) {
    return this.http.delete(`${this.apiUrl}/${songId}`);
  }
}
