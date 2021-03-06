import { Commentary, CommentaryApi, Essay } from '@/definitions/general';
import api, { getLoggedUserId } from '@/services/api';
import { commentaryApiToCommentary } from '@/utils/mappers';
import CommentaryList from '@components/Pages/Essay/Commentary';
import DetailedEssayCard from '@components/Pages/Essay/DetailedEssayCard';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { CommentBox } from './styles';

interface EssayDetailsProps {
  essay: Essay;
}

const EssayDetails: React.FC<EssayDetailsProps> = ({ essay }) => {
  const [commentaries, setCommentaries] = useState<Commentary[]>([]);

  useEffect(() => {
    api
      .get(`/essays/${essay.id}/comments`)
      .then((res) => {
        const comments = res.data.map((comment: CommentaryApi) =>
          commentaryApiToCommentary(comment),
        );

        setCommentaries(comments);
      })
      .catch((err) => toast.error('Erro ao carregar comentários'));
  }, []);

  const handleCommentSubmit = (text: string) => {
    api
      .post('/users/comment', {
        body: text,
        idEssay: essay.id,
        idUser: getLoggedUserId(),
        upVote: 0,
      })
      .then((res) => {
        toast.success('Comentário adicionado!');

        api.get(`/essays/${essay.id}/comments`).then((response) => {
          const comments = response.data.map((comment: CommentaryApi) =>
            commentaryApiToCommentary(comment),
          );

          setCommentaries(comments);
        });
      })
      .catch((err) => toast.error('Erro ao adicionar comentário'));
  };

  return (
    <>
      <DetailedEssayCard essay={essay} />
      <CommentBox>
        <CommentaryList
          onCommentSubmit={handleCommentSubmit}
          authorAvatar={
            essay.author.avatar
              ? essay.author.avatar
              : 'https://picsum.photos/42'
          }
          commentaries={commentaries}
        />
      </CommentBox>
    </>
  );
};

export default EssayDetails;
